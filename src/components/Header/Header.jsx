import profile from "../../assets/images/profile.png";
const Header = () => {
  return (
    <main>
      <div className="navbar bg-base-100 mt-10">
        <div className="flex-1">
          <p className="text-5xl font-bold">KnowledgeCafe</p>
        </div>
        <div className="flex-none">
          <div>
            <img alt="profile" src={profile} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
