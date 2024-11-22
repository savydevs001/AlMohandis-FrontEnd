// import React from 'react'

function TicketForm() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-6">
            <h1 className="text-xl font-semibold">Ticket Title</h1>
            <p className="w-fit cursor-pointer text-[#9747FF] bg-[#9747FF2B] py-0 px-2 rounded-2xl font-semibold">open</p>
      </div>
      <div className="flex flex-col space-y-1">
            <label className="font-semibold" htmlFor="">Ticket Description</label>
            <textarea className="w-full rounded-md border-slate-300" name="" rows={3} id="" placeholder="Description of the Problem Face"></textarea>
      </div>
      <div className="flex flex-col space-y-1">
            <label className="font-semibold" htmlFor="">Agent Response</label>
            <textarea className="w-full rounded-md border-slate-300" cols={50} rows={3} name="" id="" placeholder="Response of the agent regarding the issue"></textarea>
      </div>
      <div className="flex items-center justify-end gap-4">
            <button className="px-4 py-2 font-semibold text-white rounded-md bg-primary">Close Ticket</button>
            <button className="px-4 py-2 font-semibold text-white rounded-md bg-primary">Reply</button>
            
      </div>
    </div>
  )
}

export default TicketForm
