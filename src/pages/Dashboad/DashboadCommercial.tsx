

const DashboadCommercial = () => {
    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className=''>

                <img className="rounded mx-auto block" src="commercial/maison.png" alt="" />
                <h1 className='text-center mb-2'>Cordonnées du client</h1>

                <form className="space-y-4 md:space-y-6">
                    <div>
                        <label htmlFor="email" className="block  text-sm font-medium text-gray-900 dark:text-black">Civile*</label>
                        <select name="" className='className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block  p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" ' id="">
                            <option value=""> Monsieur</option>
                        </select>
                    </div>
                    <div className='grid  gap-2 grid-cols-2'>
                        <div>
                            <label htmlFor="email" className="block  text-sm font-medium text-gray-900 dark:text-black">Prenom*</label>
                            <input type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block  text-sm font-medium text-gray-900 dark:text-black">Nom*</label>
                            <input type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block  text-sm font-medium text-gray-900 dark:text-black">Mobile*</label>
                            <input type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block  text-sm font-medium text-gray-900 dark:text-black">Telephone*</label>
                            <input type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-black">Email*</label>
                        <input type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-black">Adresse*</label>
                        <input type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                    </div>
                    <div className='grid gap-2 grid-cols-2'>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-black">Code Postal*</label>
                            <input type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-black">Ville*</label>
                            <input type="number" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className=" text-white bg-orange-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-[10px] text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            <div className="flex items-center justify-center">
                                <span className="text-center">Etude du logement</span>
                            </div>
                        </button>
                    </div>
                </form>
                <br />
            </div>
        </div>
    );
};

export default DashboadCommercial;
