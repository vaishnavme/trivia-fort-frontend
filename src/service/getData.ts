import axios from "axios";
import { ResponseData } from "../type/Quiz.type";

export async function getQuizData(): Promise<ResponseData | any> {
    try {
        const response = await axios.get("https://143fba6b-1de5-4c69-b570-9cc6c221791b.mock.pstmn.io");
        if(response.data.success) {
            return response.data.allQuizzes;
        }
    } catch (err) {
        console.error(err);
    }
}
