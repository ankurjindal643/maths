import "./content.css";
import photo from "./photo.jpg";
let Content = () => {
  return (
    <>
      <div className="introduction">
        <div className="quote" id="mathQuote">
          <p className="small1 font">LIFE IS A MATH EQUATION.</p>
          <p className="small2 font">IN ORDER TO GAIN THE MOST,</p>
          <p className="small3 font">YOU HAVE TO KNOW HOW TO</p>
          <p className="small4 font">CONVERT THE NEGATIVES</p>
          <p className="larger font">INTO POSITVES.</p>
        </div>

        <div className="about">
          <div className="img-div">
            <img src={photo} alt="my-photo" />
          </div>
          <div className="intro-div">
            <h1>About me</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia impedit maiores nostrum, dolor explicabo unde beatae quo? Iste repellat ex libero quas harum! Qui, labore nemo quod obcaecati fugiat placeat in aliquid quos aspernatur quae amet error, repellat nam soluta doloribus eos. Illo, eos aliquid, distinctio quas iste, id minus soluta saepe earum nesciunt et quos. Vero omnis odit nostrum possimus ad, et soluta voluptate voluptates porro non vitae magni voluptas, deserunt debitis excepturi expedita corporis veniam, cum necessitatibus quae libero mollitia sequi. Qui totam dolorum inventore dolor, quod praesentium velit placeat quidem voluptatibus deleniti possimus ipsum est natus explicabo!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
