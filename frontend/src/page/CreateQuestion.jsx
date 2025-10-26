import React from 'react'
import { useForm } from 'react-hook-form'
import { PreMadeTags } from '../constants/QuestionsConstants'


const CreateQuestion = () => {


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        let storedData = localStorage.getItem("questionaire")
        let dataArray = storedData ? JSON.parse(storedData) : [];
        data["id"] = dataArray.length + 1;
        console.log(data)
        dataArray.push(data)
        try {
            // If the data is an object or array, convert it to a JSON string
            const stringifiedData = typeof dataArray === 'object' ? JSON.stringify(dataArray) : String(dataArray);
            localStorage.setItem("questionaire", stringifiedData);
            console.log(`Data stored successfully for key: ${"questionaire"}`);
        } catch (error) {
            console.error(`Error storing data for key ${"questionaire"}:`, error);
        }
    }

    return (
        <div className='w-[90vw] mx-auto h-fit'>
            <form onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col justify-center items-center gap-y-10 pt-10'>
                {/* <input defaultValue="test" {...register("example")} /> */}
                <div className=' border-2 rounded-lg w-full'>
                    <input {...register("question", { required: true })} className='p-2 text-lg w-full' />
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}
                </div>
                <div className=' border-2 rounded-lg w-full'>
                    <select {...register("tags", { required: true })} className='p-2 text-lg w-full'>
                        {/* <option value="select">select</option> */}
                        {PreMadeTags && PreMadeTags.map((item, index) => (
                            <option key={index} value={item}>{item}</option>
                        ))}
                    </select>
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}
                </div>
                <div className=' border-2 rounded-lg w-full'>
                    <textarea rows={10} {...register("answer", { required: true })} className='p-2 text-lg w-full' />
                    {/* {errors.exampleRequired && <span>This field is required</span>} */}
                </div>

                <input className='bg-green-400 text-white rounded-lg w-[200px] p-2 text-lg' type="submit" />
            </form>

        </div>
    )
}

export default CreateQuestion