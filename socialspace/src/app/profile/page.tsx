import "../globals.css"

export default function Profile() {
    const people = [
        {
          name: 'Leslie Alexander',
          email: 'leslie.alexander@example.com',
          role: 'Co-Founder / CEO',
          last_message: "Hello",
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Michael Foster',
          email: 'michael.foster@example.com',
          role: 'Co-Founder / CTO',
          last_message: "Hello World! Lorem Ipsum",
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Dries Vincent',
          email: 'dries.vincent@example.com',
          role: 'Business Relations',
          last_message: "Hello World! Lorem Ipsum. Do yo wanna read notification",
          imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: null,
        },
        {
          name: 'Lindsay Walton',
          email: 'lindsay.walton@example.com',
          role: 'Front-end Developer',
          last_message: "Hello World! Lorem Ipsum",
          imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Courtney Henry',
          email: 'courtney.henry@example.com',
          role: 'Designer',
          last_message: "Hello World! Lorem Ipsum",
          imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: '3h ago',
          lastSeenDateTime: '2023-01-23T13:23Z',
        },
        {
          name: 'Tom Cook',
          email: 'tom.cook@example.com',
          role: 'Director of Product',
          last_message: "Hello World! Lorem Ipsum. A LOT OF NOTIFYES",
          imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
          lastSeen: null,
        },
      ]


    return (
        <div className="bg-[#131313] min-h-screen">
            <div className="flex bg-[#2e333d] ml-20 h-screen rounded-3xl justify-start">
                <div className=" bg-[#2e333d] w-1/5 h-screen rounded-l-3xl">
                    <input
                        type="search"
                        className="bg-[#424855] mt-5 ml-10 w-9/12 rounded-xl text-white"
                        placeholder="Search"
                    />
                    <ul role="list" className="mt-6 ">
                        {people.map((person) => (
                            <li key={person.email} className="ml-5 flex justify-between gap-x-6 py-5 hover:bg-[#424855] hover:rounded-xl">
                                <div className="flex gap-x-4 ml-5">
                                    <img className="h-12 w-12 flex-none rounded-xl bg-gray-50" src={person.imageUrl} alt="" />
                                    {person.lastSeen ? (
                                    <p></p>
                                    ) : (
                                    <div className="mb-10 flex-none items-center gap-x-1.5">
                                        <div className="rounded-full bg-emerald-500/20 p-1">
                                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                        </div>
                                    </div>
                                    )}
                                    <div className="min-w-0 flex-auto justify-between float-right">
                                        <p className="text-sm font-semibold leading-6 text-white">{person.name}</p>
                                        <p className="text-xs w-4/5 font-semibold leading-6 text-[#a7b8dc] truncate">{person.last_message}</p>
                                    </div>

                                </div>
                            </li>
                        ))}
                        </ul>
                </div>
                <div className="ml-10 w-5/6 mt-5">
                    <div className="w-auto h-auto flex justify-between">
                        <div>
                            <h1 className='text-white text-3xl font-semibold leading-6'>Leslie Alexander</h1>
                            <p className='text-xs w-4/5 font-semibold leading-6 text-[#c1cbe0]'>Last seen: 21m ago</p>
                        </div>
                        <div className=" flex justify-between mr-20 mt-2">
                            <img className="ml-14 w-8 h-8" src="/search.svg" alt="" />
                            <img className="ml-14 w-8 h-8" src="/call.png" alt="" />
                            <img className="ml-14 w-8 h-8" src="/split.png" alt="" />
                        </div>
                    </div>
                    
                    <div className="h-4/5 overflow-auto text-white">
                        <div className="w-2/6 h-auto text-white bg-slate-400 rounded-xl mt-10">
                            <h1 className='ml-5'>Hello World</h1>
                        </div>
                        <div className="w-2/6 h-auto text-white bg-slate-400 rounded-xl mt-10">
                            <h1 className='ml-5'>Hello World</h1>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}
