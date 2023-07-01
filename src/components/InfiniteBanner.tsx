"use client";
interface InfiniteBannerProps {
  text: string[];
}

export default function InfiniteBanner(props: InfiniteBannerProps) {
  const { text } = props;

  return (
    <div className="my-24">
      <div id="rssBlock">
        <div className="cnnContents">
          {text.map((t, i) => (
            <span key={i} className="marqueeStyle mx-10 font-bold uppercase">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
