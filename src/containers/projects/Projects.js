import React, {useState, useEffect, useContext, Suspense, lazy} from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import {images, openSource, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";
import { GifGridItem } from "../../components/projectsGrid/projectsGrid";
export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);
  // todo: remove useContex because is not supported
  const {isDark} = useContext(StyleContext);

  // useEffect(() => {
  //   const getRepoData = () => {
  //     fetch("https://blais3pasc4l.github.io/sturdy-funicular-Portafolio/")
  //       .then(result => {
  //         if (result.ok) {
  //           return result.json();
  //         }
  //         throw result;
  //       })
  //       .then(response => {
  //         setrepoFunction(response.data.user.pinnedItems.edges);
  //       })
  //       .catch(function (error) {
  //         console.error(
  //           `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
  //         );
  //         setrepoFunction("Error");
  //       });
  //   };
  //   getRepoData();
  // }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">¿Deseas ver mis proyectos?</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
              }
              return (
                <GithubRepoCard repo={v} key={v.node.id} isDark={isDark} />
              );
            })}
          </div>
          
          <div className="projects">
            {
              images.img.map(img => (
                <GifGridItem
                key = {img.title}
                  {...img}
                />
              )
              )
            }
          </div>
          
          
          <Button
            text={"Ir a mi GitHub"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}