import { PATHS } from "@util";
import { useAnimation } from "framer-motion";
import { useLocale } from "hooks";
import NavItem from "./NavItem";
import NestedNavItems from "./NestedNavItems";

const NavItems = () => {
  const { pathname, localeConst } = useLocale();
  const aboutControls = useAnimation();
  const academicControls = useAnimation();

  return (
    <ul className="list-none ml-auto flex-grow-1 hidden md:flex items-center justify-end">
      <NavItem
        title={localeConst.ROUTES.aboutUs}
        to={PATHS.aboutUs}
        active={pathname === PATHS.aboutUs}
        classes={{ container: "ml-1.5 relative", root: "rounded-md" }}
        onMouseEnter={() => {
          aboutControls.start("to");
        }}
        onMouseLeave={() => {
          aboutControls.start("from");
        }}
      >
        <NestedNavItems controls={aboutControls}>
          <NavItem
            title={localeConst.ROUTES.teachers}
            to={PATHS.teachers}
            active={pathname === PATHS.teachers}
          />
          <NavItem
            title={localeConst.ROUTES.alumni}
            to={PATHS.alumni}
            active={pathname === PATHS.alumni}
          />
        </NestedNavItems>
      </NavItem>
      <NavItem
        title={localeConst.ROUTES.academic}
        to={PATHS.academic}
        active={pathname === PATHS.academic}
        classes={{ container: "ml-1.5 group relative", root: "rounded-md" }}
        onMouseEnter={() => {
          academicControls.start("to");
        }}
        onMouseLeave={() => {
          academicControls.start("from");
        }}
      >
        <NestedNavItems controls={academicControls}>
          <NavItem
            title={localeConst.ROUTES.routine}
            to={PATHS.routines}
            active={pathname === PATHS.routines}
          />
          <NavItem
            title={localeConst.ROUTES.syllabus}
            to={PATHS.syllabus}
            active={pathname === PATHS.syllabus}
          />
          <NavItem
            title={localeConst.ROUTES.coCurricularActivities}
            to={PATHS.coCurricularActivities}
            active={pathname === PATHS.coCurricularActivities}
          />
          <NavItem
            title={localeConst.ROUTES.guidelines}
            to={PATHS.guidelines}
            active={pathname === PATHS.guidelines}
          />
        </NestedNavItems>
      </NavItem>
      <NavItem
        title={localeConst.ROUTES.noticeBoard}
        to={PATHS.noticeBoard}
        active={pathname === PATHS.noticeBoard}
        classes={{ root: "rounded-md" }}
      />
      <NavItem
        title={localeConst.ROUTES.gallery}
        to={PATHS.gallery}
        active={pathname === PATHS.gallery}
        classes={{ root: "rounded-md" }}
      />
    </ul>
  );
};

export default NavItems;
