interface MainTileProps {
  title?: string;
  text?: string;
  imgSrc?: string;
  iconSrc?: string;
}

export default function MainTile(props: MainTileProps) {
  const { title, text, imgSrc, iconSrc } = props;

  return (
    <div className="flex flex-col gap-4">
      {imgSrc && <img className="tile-image" src={imgSrc} alt="Vercel Logo" />}

      <div>
        {title && <p className="text-2xl font-bold uppercase">{title}</p>}
        {text && <p className="text-sm opacity-70 leading-relaxed">{text}</p>}
      </div>

      {iconSrc && <img className="tile-icon" src={iconSrc} />}
    </div>
  );
}
