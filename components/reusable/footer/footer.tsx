import Link from "next/link";

const NavFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center text-sm pb-4">
      <div>
        Made by{' '}
        <Link target="_blank" href="https://github.com/developerrahulofficial/internet-speed-checker">
          <span style={{ color: 'pink' }}>Developer Rahul</span>
        </Link>{' '}
        with ❤️
      </div>
    </div>
  );
};

export default NavFooter;
