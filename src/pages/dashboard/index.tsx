import { Card } from "../../components/cards";

export function DashBoard() { 

    

    return (
        <div className="">
                <div className="border border-green-800 pt-10 pl-5 flex items-start gap-10  ">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
        </div>
    );
}