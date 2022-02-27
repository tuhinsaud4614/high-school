import { useLocale } from "hooks";
import NavItem from "./NavItem";
import SubNavItems from "./SubNavItems";

const NavItems = () => {
  const { pathname, localeConst } = useLocale();
  return (
    <ul className="list-none ml-auto flex-grow-1 hidden md:flex items-center justify-end">
      <NavItem
        title={localeConst.ROUTES.aboutUs}
        to="/about-us"
        active={pathname === "/about-us"}
        classes={{ container: "ml-1.5 group relative", root: "rounded-md" }}
      >
        <SubNavItems>
          <NavItem
            title={localeConst.ROUTES.teachers}
            to="/about-us/teachers"
            active={pathname === "/about-us/teachers"}
          />
          <NavItem
            title={localeConst.ROUTES.alumni}
            to="/about-us/alumni"
            active={pathname === "/about-us/alumni"}
          />
        </SubNavItems>
      </NavItem>
      <NavItem
        title={localeConst.ROUTES.academic}
        to="/academic"
        active={pathname === "/academic"}
        classes={{ container: "ml-1.5 group relative", root: "rounded-md" }}
      >
        <SubNavItems>
          <NavItem
            title={localeConst.ROUTES.routine}
            to="/academic/routines"
            active={pathname === "/academic/routines"}
          />
          <NavItem
            title={localeConst.ROUTES.syllabus}
            to="/academic/syllabus"
            active={pathname === "/academic/syllabus"}
          />
          <NavItem
            title={localeConst.ROUTES.coCurricularActivities}
            to="/academic/co-curricular-activities"
            active={pathname === "/academic/co-curricular-activities"}
          />
          <NavItem
            title={localeConst.ROUTES.guidelines}
            to="/academic/guidelines"
            active={pathname === "/academic/guidelines"}
          />
        </SubNavItems>
      </NavItem>
      <NavItem
        title={localeConst.ROUTES.noticeBoard}
        to="/notice-board"
        active={pathname === "/notice-board"}
        classes={{ root: "rounded-md" }}
      />
      <NavItem
        title={localeConst.ROUTES.gallery}
        to="/gallery"
        active={pathname === "/gallery"}
        classes={{ root: "rounded-md" }}
      />
    </ul>
  );
};

export default NavItems;
