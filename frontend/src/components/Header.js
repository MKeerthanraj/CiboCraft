import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lobster&family=Nunito&display=swap');
      </style>
      <div className="Logo">
        <span className="LogoName">CiboCraft</span>
        <span className="LogoTagline">Grimoire of the Grub!!</span>
      </div>
    </div>
  );
}

export default Header;