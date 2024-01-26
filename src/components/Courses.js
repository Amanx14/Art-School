import Boxes from "./Boxes";

const Courses = () => {
    return (
        <div className="courses">
            <h2 id="courses-heading">OUR COURSES</h2>
            <i id="dash" class="fa-solid fa-minus"></i>

            <div className="design">
                <Boxes name="F" heading = "Fine" para="I'm a paragraph. Click here to add your own text and edit me."/>
                <Boxes name="G" heading = "Graphic Design" para="I'm a paragraph. Click here to add your own text and edit me."/>
                <Boxes name="G" heading = "Graffiti" para="I'm a paragraph. Click here to add your own text and edit me."/>
                <Boxes name="I" heading = "Illustration" para="I'm a paragraph. Click here to add your own text and edit me."/>
            </div>
        </div>
    );
}

export default Courses;