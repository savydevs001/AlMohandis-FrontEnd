// import Re?act from 'react'

function ViewVideo() {
  return (
    <div className="space-y-3">
      <div>
      <iframe
        className="w-full lg:h-[60vh] h-[30vh] rounded-xl"
        src="https://www.youtube.com/embed/tLh9T51zvpQ?si=AEZQGorsFEJid9Mt"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      </div>
      <div className="text-pTag">
            <p className="text-xs ">98,73293 people are streaming it right now</p>
            <p className="text-xs font-semibold">Started on 20-08-2023</p>
            <p className="text-xs"><span className="font-semibold">Duration</span> 01:30:00</p>
      </div>
      <div className="w-full space-y-2">
            <h3 className="text-lg font-semibold">Title</h3>
            <p className="text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias sequi fugiat placeat dolores? Eos, laborum commodi, magnam saepe repellat suscipit est maxime nostrum, cum vero quaerat! Vel, tempora. Quo, nihil.</p>
      </div>
    </div>
  )
}

export default ViewVideo
