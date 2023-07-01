"use client";

export default function Header() {
  const toogleMenu = () => {};

  return (
    <div className="w-full flex py-2">
      <img className="tile-icon ml-8 mr-2" src="/icons/lorem.svg" />
      <p>Lorem</p>
      <img
        className="accordeon-minus-icon mx-4"
        src="/icons/menu-05.svg"
        onClick={toogleMenu}
      />
    </div>
  );
}
