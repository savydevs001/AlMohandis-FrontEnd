import AdminAccountSettingForm from "./AccountSettingForm";
import AdminProfileSettingForm from "./ProfileSettingForm";




function AdminProfileSetting() {
  return (
    <div>
        <div className="flex flex-col items-center bg-white border rounded-md lg:flex-row">
      <div className="lg:w-[30%] w-full">
       <h1 className="text-lg font-semibold text-center">Profile Setting</h1>
      </div>
      <div className="lg:w-[70%] w-full border">

<AdminProfileSettingForm/>
      </div>
     </div>
<AdminAccountSettingForm/>
    </div>
  )
}

export default AdminProfileSetting;


