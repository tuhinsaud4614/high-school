import TeacherCardCall from "./Call";
import TeacherCardSocialLinks from "./SocialLinks";

const className = {
  root: "flex flex-col h-full",
  content: "mt-4 flex-auto flex flex-col justify-center",
  name: "text-lg md:text-xl text-center text-blue-600",
};

const TeacherCardGeneralInfo = () => {
  return (
    <div className={className.root}>
      <h2 className={className.name}>Mr. Karim Khan</h2>
      <div className={className.content}>
        <TeacherCardCall list={["01234567890", "01234567890"]} />
        <span className="block text-sm text-center">
          Mail:{" "}
          <a
            className="text-blue-500 hover:text-blue-500"
            href={`mailto:abc@gmail.com`}
          >
            abc@gmail.com
          </a>
        </span>
        <TeacherCardSocialLinks
          facebook="https://www.facebook.com"
          instagram="https://www.instagram.com"
          linkedin="https://www.linkedin.com"
          twitter="https://www.twitter.com"
        />
      </div>
    </div>
  );
};

export default TeacherCardGeneralInfo;
