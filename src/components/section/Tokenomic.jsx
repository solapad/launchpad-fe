
function Tokenomic() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <p className="text-lg font-medium text-purple-600 dark:text-purple-500">$SLPAD Tokenomics</p>
          <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">Trusted by investors and businesses</h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            The SLPAD token model is designed to give users the freedom to stacking, so they can join or skip sales without the FOMO. Stake $SLPAD for later uses to register for sales on our platform.
            <br /><br />From our Community Rewards pool, we’ll be able to reward longtime stakers and keep our users engaged with fun raffles, contests, and other social events.
          </p>
          <div className="pt-6 mt-6 space-y-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <a href="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                Solana Explorer
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
            <div>
              <a href="#" className="inline-flex items-center text-base font-medium text-purple-600 hover:text-purple-800 dark:text-purple-500 dark:hover:text-purple-700">
                Whitepaper v0.0.1
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="col-span-2 space-y-0 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">5% - LIQUIDITY</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">100% distributed at TGE</p>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">40% - COMMUNITY</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">0% distributed at TGE, 48 months linear vesting</p>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">25% - PRIVATE SALE</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">10% distributed at TGE, 3 months cliff, 12 months linear vesting</p>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">5% - PUBLIC SALE</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">100% distributed at TGE</p>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">15% - PARTNERSHIP</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">10% distributed at TGE, 3 months cliff, 12 months linear vesting</p>
          </div>
          <div>
            <h3 className="mb-2 text-2xl font-bold dark:text-white">10% - TEAM</h3>
            <p className="font-light text-gray-500 dark:text-gray-400">0% distributed at TGE, 3 months cliff, 21 months linear vesting</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tokenomic