import FileUpload from "./FileUpload";

interface MainModules_Step_RigthModuleProps {
  handleFileUpload?: (file: File | null) => void;
  handleLessonChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  lesson: { lessonTitle: string; lessonDescription: string; srcUrl: File | null | string; isPromoted: boolean; isFree: boolean, lessonType: string };
}

const MainModules_Step_RigthModule: React.FC<MainModules_Step_RigthModuleProps> = ({ handleFileUpload, handleLessonChange, lesson }) => {
  return (
    <div>
      <div className='flex justify-between w-full gap-4'>
        <div className='space-y-4 w-[90%]'>
          <div>
            <label className="font-semibold">Title</label>
            <input className='w-full py-2 rounded-md' name="lessonTitle" type="text" placeholder='Lesson 1 Title' value={lesson.lessonTitle} onChange={handleLessonChange} />
          </div>
          <div className='space-y-4'>
            <div className='mt-3 space-y-2'>
              <div className='flex items-center gap-3'>
                <input className='w-3 h-3 rounded-sm text-primary' name="isPromoted" type="checkbox" checked={lesson.isPromoted} onChange={handleLessonChange} />
                <p className='text-sm text-[#7C7C7C]'>Promoted Content</p>
              </div>
              <div className='flex items-center gap-3'>
                <input className='w-3 h-3 rounded-sm text-primary' name="isFree" type="checkbox" checked={lesson.isFree} onChange={handleLessonChange} />
                <p className='text-sm text-[#7C7C7C]'>Available for Free</p>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <label>Description</label> {/* Use the title prop here */}
              <textarea className='w-full border rounded-md' name="lessonDescription" value={lesson.lessonDescription} onChange={handleLessonChange}></textarea>
            </div>
          </div>
        </div>

        {/* Lesson File and Attachment Upload Sections */}
        <div className='space-y-4'>
          <div className='w-[100%]'>
            <label className='font-semibold'>Lesson File</label>
            <div className='w-[100%] border border-dashed border-primary p-2 text-center text-primary space-y-4'>
              <p className="">Browse and choose the files you want to upload from your computer</p>
              <FileUpload onFileSelect={handleFileUpload} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainModules_Step_RigthModule;
