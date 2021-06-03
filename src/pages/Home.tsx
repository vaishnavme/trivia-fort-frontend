import { useEffect } from "react";
import { getQuizData } from "../service/getData";
import { QuizGrid } from "../components";
import { useData } from "../context";

export default function Home() {
    const { dispatch } = useData();

    const get = async() => {
        const quizData = await getQuizData(); 
        dispatch({type: "SET_ALL_QUIZ", payload: quizData});
        console.log( "quiz", quizData)
    }
    useEffect(() => {
        get();
    },[]);
    
    return (
        <div>
            <QuizGrid/>
        </div>
    )
}