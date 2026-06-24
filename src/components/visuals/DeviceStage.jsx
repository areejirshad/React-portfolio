export function DeviceStage({ main, secondary, label, variant = "dark" }) {
  return (
    <div className={`device-stage device-stage--${variant}`}>
      <div className="device-stage__halo" />
      <figure className="device-stage__main" data-drift>
        <img src={main} alt={label || "Project screenshot"} />
      </figure>
      {secondary && (
        <figure className="device-stage__secondary" data-drift>
          <img src={secondary} alt="Workflow screenshot" />
        </figure>
      )}
    </div>
  );
}

export function ScreenshotRail({ items }) {
  return (
    <div className="screenshot-rail" data-reveal>
      {items.map((item) => (
        <figure key={item.label}>
          <img src={item.image} alt={item.label} />
          <figcaption>{item.label}</figcaption>
        </figure>
      ))}
    </div>
  );
}