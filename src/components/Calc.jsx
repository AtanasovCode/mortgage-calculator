
import { useStore } from "../../useStore";
import Inputs from "./Inputs";
import Result from "./Result";

const Calc = () => {
    return (
        <div className="bg-slate-950 flex items-center justify-center w-[100vw]">
            <div className="bg-background w-[65vw] flex flex-row items-stretch p-4">
                <Inputs />
                <Result />
            </div>
        </div>
    );
}

export default Calc;