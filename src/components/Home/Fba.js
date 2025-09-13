import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

export default function MatterDemo() {
  const sceneRef = useRef(null);
  const boxesRef = useRef([]);

  useEffect(() => {
    const { Engine, Render, Runner, Bodies, Composite, Mouse, MouseConstraint, Events } = Matter;

    const engine = Engine.create();
    const runner = Runner.create();
    const scene = sceneRef.current;
    const width = scene.clientWidth;
    const height = scene.clientHeight;

    // Renderer (hidden canvas, we use DOM elements for visuals)
    const render = Render.create({
      element: scene,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
      },
    });

    // Boundaries (inside container)
    const boundaries = [
      Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true }), // ground
      Bodies.rectangle(width / 2, -25, width, 50, { isStatic: true }), // ceiling
      Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true }), // left
      Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true }), // right
    ];
    Composite.add(engine.world, boundaries);

    // Create physics bodies for DOM boxes
    boxesRef.current.forEach((el, i) => {
      if (!el) return;
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      const x = Math.random() * (width - w) + w / 2;
      const y = Math.random() * -200 - i * 120; // spawn above viewport

      // Place DOM at starting spot so it's visible right away
      el.style.left = x - w / 2 + "px";
      el.style.top = y - h / 2 + "px";

      const body = Bodies.rectangle(x, y, w, h, {
        restitution: 0.5,
        friction: 0.1,
        density: 0.01,
      });

      el.body = body;
      Composite.add(engine.world, body);
    });

    // Mouse drag support
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    Composite.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Sync DOM with physics
    Events.on(engine, "afterUpdate", () => {
      boxesRef.current.forEach((el) => {
        if (!el?.body) return;
        const { x, y } = el.body.position;
        const angle = el.body.angle;
        el.style.left = x - el.offsetWidth / 2 + "px";
        el.style.top = y - el.offsetHeight / 2 + "px";
        el.style.transform = `rotate(${angle}rad)`;
      });
    });

    // Start engine when scene is in viewport
    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            Runner.run(runner, engine);
            Render.run(render);
          }
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(scene);

    return () => {
      observer.disconnect();
      Render.stop(render);
      Runner.stop(runner);
      Engine.clear(engine);
      Composite.clear(engine.world, false);
      render.canvas.remove();
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        background: "#f0f0f0",
      }}
    >
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={(el) => (boxesRef.current[i] = el)}
          style={{
            position: "absolute",
            width: "100px",
            height: "100px",
            background: ["tomato", "skyblue", "limegreen", "orange", "purple", "gold"][i % 6],
            borderRadius: "12px",
            pointerEvents: "none", // lets physics handle drag
          }}
        />
      ))}
    </div>
  );
}
