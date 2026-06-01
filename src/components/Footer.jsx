

const Footer = () => {
  return (
    <footer className="py-6 text-center bg-slate-950 border-t border-slate-800">

      <p className="text-slate-400 text-sm">
        📍 Addis Ababa, Ethiopia
      </p>

      <p className="text-slate-500 text-xs mt-2">
        © {new Date().getFullYear()} Haregeweyn. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;