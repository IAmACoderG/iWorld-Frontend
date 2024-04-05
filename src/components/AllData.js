import React, { useRef, useState } from 'react'
import { GlobalAccess } from "../contexts";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../utils/cn";
import { Meteors } from "./ui/meteors";
import { MdEditDocument, MdDelete } from "react-icons/md";
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    },
};

const AllData = () => {

    //Start..>>
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    //End..>>

    const { updateNote, notes, deleteNote } = GlobalAccess();
    const ref = useRef(null);
    const [note, setNote] = useState({ id: "", etitle: "", ediscription: "" });

    const editNote = (curentNote) => {
        console.log("Before");
        ref.current.click();
        console.log("after");
        setNote({ id: curentNote._id, etitle: curentNote.title, ediscription: curentNote.discription })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("updating your notes....", note)
        updateNote(note.id, note.etitle, note.ediscription);
        closeModal();
    };

    const onChangeData = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    };

    return (
        <>
            {/* Start */}
            <div className='cursor-pointer z-50'>
                <button ref={ref} onClick={openModal}></button>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-gray-900  border-gray-800 z-50 border-2">
                        <h2 className="font-bold text-xl text-pink-300 dark:text-neutral-200">
                            iNoteBook
                        </h2>
                        <form className="my-8" onSubmit={handleSubmit}>
                            <LabelInputContainer className="mb-4">
                                <Label className="text-pink-300" htmlFor="etitle">Title</Label>
                                <Input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChangeData} />
                            </LabelInputContainer>

                            <LabelInputContainer className="mb-4">
                                <Label className="text-pink-300" htmlFor="ediscription">Discription</Label>
                                <Input type="text" className="form-control" id="ediscription" name='ediscription' value={note.ediscription} onChange={onChangeData} />
                            </LabelInputContainer>

                            <div className='flex flex-col gap-2'>
                                <button
                                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="submit"
                                >
                                    Update &rarr;
                                    <BottomGradient />
                                </button>
                                <button
                                    onClick={closeModal}
                                    className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                                    type="button"
                                >
                                    Close &rarr;
                                    <BottomGradient />
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            </div>
            {/* End */}

            {(notes.length !== 0) &&
                <div className='flex gap-10 w-[75vw] h-full flex-wrap items-center justify-center'>
                    <div className='w-full flex items-center flex-col'>
                        <h3 className='text-3xl text-white mb-7'>All <span className='text-[#00abf0]'>Notes</span></h3>
                        <div className='bg-teal-50 h-1 w-[40vw] '></div>
                    </div>
                    {notes.map((note) => (
                        <div key={note._id} className="">
                            <div className=" w-[20rem] h-[20rem] relative max-w-xs">
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full  overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-2 w-2 text-gray-300"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                            />
                                        </svg>
                                    </div>

                                    <h1 className="font-bold text-xl text-white mb-4 relative">
                                        {note.title}
                                    </h1>
                                    <p className="font-normal text-base text-slate-500 mb-4 relative">
                                        {note.discription}
                                    </p>

                                    <div className='relative'>
                                        <button onClick={() => { deleteNote(note._id) }} className="px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                                            <MdDelete />
                                        </button>
                                        <button onClick={() => editNote(note)} className=" px-4 py-1 rounded-lg  border-gray-500 text-gray-300 absolute bottom-0 -right-48">
                                            <MdEditDocument />
                                        </button>
                                    </div>

                                    {/* Meaty part - Meteor effect */}
                                    <Meteors number={20} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};


export default AllData
