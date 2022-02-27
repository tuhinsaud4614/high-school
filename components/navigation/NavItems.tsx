import { useLocale } from "hooks";
import NavItem from "./NavItem";
import SubNavItems from "./SubNavItems";

const NavItems = () => {
  const { pathname } = useLocale();
  return (
    <ul className="list-none ml-auto flex-grow-1 hidden md:flex items-center justify-end">
      <NavItem
        title="About Us"
        to="/about-us"
        active={pathname === "/about-us"}
        classes={{ container: "ml-1.5 group relative", root: "rounded-md" }}
      >
        <SubNavItems>
          <NavItem
            title="Teachers"
            to="/about-us/teachers"
            active={pathname === "/about-us/teachers"}
          />
          <NavItem
            title="Alumni"
            to="/about-us/alumni"
            active={pathname === "/about-us/alumni"}
          />
        </SubNavItems>
      </NavItem>
      <NavItem
        title="Academic"
        to="/academic"
        active={pathname === "/academic"}
        classes={{ container: "ml-1.5 group relative", root: "rounded-md" }}
      >
        <SubNavItems>
          <NavItem
            title="Routines"
            to="/academic/routines"
            active={pathname === "/academic/routines"}
          />
          <NavItem
            title="Syllabus"
            to="/academic/syllabus"
            active={pathname === "/academic/syllabus"}
          />
          <NavItem
            title="Co-curricular Activities"
            to="/academic/co-curricular-activities"
            active={pathname === "/academic/co-curricular-activities"}
          />
          <NavItem
            title="Guidelines"
            to="/academic/guidelines"
            active={pathname === "/academic/guidelines"}
          />
        </SubNavItems>
      </NavItem>
      <NavItem
        title="Notice Board"
        to="/notice-board"
        active={pathname === "/notice-board"}
        classes={{ root: "rounded-md" }}
      />
      <NavItem
        title="Gallery"
        to="/gallery"
        active={pathname === "/gallery"}
        classes={{ root: "rounded-md" }}
      />
    </ul>
  );
};

export default NavItems;
