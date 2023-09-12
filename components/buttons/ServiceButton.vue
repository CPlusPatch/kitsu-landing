<script setup lang="ts">
const services = [
	{
		name: "KitsuClub",
		image: "https://s3.kitsunes.club/storage/bf399313-959c-43e1-a225-0e8e6f71a852.png",
		href: "https://kitsunes.club",
	},
	{
		name: "KitsuGay",
		image: "https://cdn.flashfire.site/kitsunesgay/eaf6912c-d95d-4ca5-b6ff-5b1cf2f44cc2.png",
		href: "https://kitsunes.gay",
	},
	{
		name: "KitsuCafe",
		image: "https://kitsunes.cafe/pictrs/image/91a3e7e4-6c8c-4acb-ab48-324ca0ebb9ef.png",
		href: "https://kitsunes.cafe",
	},
	{
		name: "KitsuChat",
		image: "https://s3.kitsunes.club/storage/600e1975-ed4c-4ea5-ba05-caadcc95e003.png",
		href: "https://kitsunes.chat",
	},
	{
		name: "KitsuWatch",
		image: "https://watch.kitsunes.club/logo",
		href: "https://watch.kitsunes.club",
	},
	{
		name: "KitsuCloud",
		image: "https://s3.kitsunes.club/cloud/19b8556a-07cf-4b5e-8f84-8436169df0e4.png",
		href: "https://kitsunes.cliud",
	},
];
</script>

<template>
	<HeadlessMenu as="div" class="relative inline-block text-left">
		<div>
			<HeadlessMenuButton
				class="rounded-md group !bg-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:!bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400">
				Join us
				<ButtonsAnimatedArrow />
			</HeadlessMenuButton>
		</div>

		<transition
			enter-active-class="transition ease-out duration-100"
			enter-from-class="transform opacity-0 scale-95"
			enter-to-class="transform opacity-100 scale-100"
			leave-active-class="transition ease-in duration-75"
			leave-from-class="transform opacity-100 scale-100"
			leave-to-class="transform opacity-0 scale-95">
			<HeadlessMenuItems
				class="absolute left-0 z-10 mt-2 w-56 origin-top-left rounded-md bg-dark-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
				<div class="py-1">
					<HeadlessMenuItem
						v-for="service in services"
						:key="service.name">
						<a
							:href="service.href"
							:class="[
								'text-gray-200 group block px-4 py-2 text-sm flex flex-row items-center gap-4 font-semibold hover:bg-dark-100',
							]"
							><nuxt-img
								format="webp"
								sizes="sm:24px"
								:src="service.image"
								class="h-6 w-6 runded" />
							{{ service.name
							}}<span class="ml-auto"
								><ButtonsAnimatedArrow /></span
						></a>
					</HeadlessMenuItem>
				</div>
			</HeadlessMenuItems>
		</transition>
	</HeadlessMenu>
</template>
