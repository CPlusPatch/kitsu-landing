<template>
	<div
		id="microblog"
		class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
		<div class="grid gap-5 row-gap-8 lg:grid-cols-2">
			<div class="flex flex-col justify-center">
				<div class="max-w-xl mb-6">
					<h2
						class="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-50 sm:text-4xl sm:leading-none">
						Fully featured microblogging
					</h2>
					<p class="text-base text-gray-200 md:text-lg">
						KitsuClub and KitsuGay feature complete microblogging
						services with emojis, reacts, quote posts, animated
						avatars, and more! We're always adding new features, so
						you'll never get bored!
					</p>
				</div>
				<div class="grid gap-5 row-gap-8 sm:grid-cols-2">
					<div
						class="bg-dark-300 shadow-sm hover:ring-2 duration-200 overflow-hidden ring-purple-500 rounded">
						<div
							class="h-full p-5 rounded-r flex flex-col justify-between">
							<h6
								class="mb-2 font-semibold leading-5 text-gray-50">
								Based on Misskey
							</h6>
							<p class="text-sm text-gray-200">
								KitsuClub and KitsuGay are based on Misskey, a
								secure, open-source microblogging platform
								written in Node.js.
							</p>
						</div>
					</div>
					<div
						class="bg-dark-300 shadow-sm hover:ring-2 duration-200 overflow-hidden ring-purple-500 rounded">
						<div
							class="h-full p-5 rounded-r flex flex-col justify-between">
							<h6
								class="mb-2 font-semibold leading-5 text-gray-50">
								Works with the Fediverse
							</h6>
							<p class="text-sm text-gray-200">
								KitsuClub and KitsuGay are compatible with the
								Fediverse, letting you chat with over 15M other
								friendly users
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<nuxt-img
					class="w-full h-56 rounded shadow-lg sm:h-96"
					format="webp"
					sizes="sm:100vw md:100vw lg:50vw"
					src="/images/assets/screenshots/screenshot3.png"
					alt="" />
			</div>
		</div>
	</div>
</template>
