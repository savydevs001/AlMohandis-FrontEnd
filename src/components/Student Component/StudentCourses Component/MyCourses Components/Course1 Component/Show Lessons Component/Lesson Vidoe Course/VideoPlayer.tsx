import EnrolledStudent from "./EnrolledStudent";
import PublishedCourse from "./PublishedCourse";
import StudentRating from "./StudentRating";
import VideoCommets from "./VideoCommets";

function VideoPlayer() {
      return (
        <div className="space-y-3 ">
          <div className="rounded-full">
            <iframe
            className="rounded-lg w-[100%] lg:h-[60vh] h-[40vh]"
            
            
              src="https://www.youtube.com/embed/XtTcWT8XGug?si=-iE2BDsQTlzeQI82"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="flex items-center gap-4">
           <div className="flex flex-col lg:w-[63%] w-[40%]">
           <label className="text-lg font-semibold" htmlFor="">Title</label>
            <select className="rounded-md "  name="" id="">
                  <option value="">Video 1</option>
                  <option value="">Video 2</option>
                  <option value="">Video 3</option>
            </select>
           </div>
          <div className="">
          <EnrolledStudent width="100%" title="Student Enrolled " count={340333}/>
          </div>
          </div>
          <div className="space-y-5">
            <PublishedCourse/>
            <StudentRating/>
            <div>
            <VideoCommets/>
            </div>
          </div>
        </div>
      );
    }
    
    export default VideoPlayer;
    