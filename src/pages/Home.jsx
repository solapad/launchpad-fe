import { Fragment, useEffect, useState } from 'react';
import { setPageTitle, toggleTheme } from '../store/themeConfigSlice';
import { useDispatch } from 'react-redux';

import Layout from "../components/Layout"
import Hero from '../components/section/Hero';
import Marketing from '../components/section/Marketing';
import Tiers from '../components/section/Tiers';
import FAQ from '../components/section/FAQ';
import Tokenomic from '../components/section/Tokenomic';

function Home() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setPageTitle('Solapad v0.1.0'));
	});

	return (
		<Layout>
			<Hero />

			<Marketing />

			<Tokenomic />

			<section className="bg-gray-50 dark:bg-gray-800">
				<div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-24 lg:px-6">
					<figure className="max-w-screen-md mx-auto">
						<svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
						</svg>
						<blockquote>
							<p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">"Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."</p>
						</blockquote>
						<figcaption className="flex items-center justify-center mt-6 space-x-3">
							<img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
							<div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
								<div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
								<div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</section>

			{/* <Tiers /> */}

			{/* <FAQ /> */}

			<section className="bg-gray-50 dark:bg-gray-800">
				<div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
					<div className="max-w-screen-sm mx-auto text-center">
						<h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">Projects Apply Here!</h2>
						<p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
							Are you developing a project on Solana? We'd love to hear more! Solapad offers incubation and advisory services in addition to our whitelist sales.
						</p>
						<a href="https://ml72c5mpp4f.typeform.com/to/nejBktfn" target="_blank" className="btn-connect mt-8 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">
							Apply IDO Now!
						</a>
					</div>
				</div>
			</section>

		</Layout>
	)
}

export default Home