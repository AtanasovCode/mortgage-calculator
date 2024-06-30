

const Inputs = () => {
    return (
        <div className="flex flex-1 text-text flex-col mr-16">
            <div className="font-bold text-lg mb-8">
                Mortgage Calculator
            </div>
            <div className="flex items-start justify-start flex-col">
                <label className="mb-4">Mortgage Amount</label>
                <div className="flex flex-row items-center justify-center w-full">
                    <div className="px-4 py-1 bg-accent rounded-tl-md rounded-bl-md">$</div>
                    <input
                        type="text"
                        className="w-full bg-secondary px-2 py-1 rounded-tr-md rounded-br-md"
                    />
                </div>
            </div>
            <div className="flex flex-row items-center justify-center mt-4">
                <div className="mr-4">
                    <label className="mb-4">Mortgage Term</label>
                    <div className="flex flex-row items-center justify-center w-full mt-4">
                        <input
                            type="text"
                            className="w-full bg-secondary px-2 py-1 rounded-tl-md rounded-bl-md"
                        />
                        <div className="px-4 py-1 bg-accent rounded-tr-md rounded-br-md">years</div>
                    </div>
                </div>
                <div>
                    <label className="">Interest Rate</label>
                    <div className="flex flex-row items-center justify-center w-full mt-4 rounded-md">
                        <input
                            type="text"
                            className="w-full bg-secondary px-2 py-1  rounded-tl-md rounded-bl-md"
                        />
                        <div className="px-4 py-1 bg-accent  rounded-tr-md rounded-br-md">%</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inputs;