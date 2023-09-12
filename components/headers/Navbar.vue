<script setup lang="ts">
const { y: scrollY } = useWindowScroll();

const open = ref(false);

const products = [
	{
		name: "KitsuClub",
		description: "A comfy Fediverse instance",
		href: "https://kitsunes.club",
		image: "https://s3.kitsunes.club/storage/bf399313-959c-43e1-a225-0e8e6f71a852.png",
	},
	{
		name: "KitsuGay",
		description: "An 18+ Fediverse instance",
		href: "https://kitsunes.gay",
		image: "https://cdn.flashfire.site/kitsunesgay/eaf6912c-d95d-4ca5-b6ff-5b1cf2f44cc2.png",
	},
	{
		name: "KitsuCafe",
		description: "Federated Reddit alternative",
		href: "https://kitsunes.cafe",
		image: "https://kitsunes.cafe/pictrs/image/91a3e7e4-6c8c-4acb-ab48-324ca0ebb9ef.png",
	},
	{
		name: "KitsuChat",
		description: "Private encrypted messaging",
		href: "https://kitsunes.chat",
		image: "https://s3.kitsunes.club/storage/600e1975-ed4c-4ea5-ba05-caadcc95e003.png",
	},
	{
		name: "KitsuWatch",
		description: "Kio's streaming service",
		href: "https://watch.kitsunes.club",
		image: "https://watch.kitsunes.club/logo",
	},
	{
		name: "KitsuCloud",
		description: "Kio's blog",
		href: "https://kitsunes.cloud",
		image: "https://s3.kitsunes.club/cloud/19b8556a-07cf-4b5e-8f84-8436169df0e4.png",
	},
];

const scrollTo = (e: Event) => {
	e.preventDefault();
	open.value = false;
	const target = document.querySelector(
		(e.target as any).getAttribute("href")
	);
	target.scrollIntoView({ behavior: "smooth" });
};
</script>
<template>
	<header
		:class="[
			'z-10 bg-transparent backdrop-blur-lg',
			'fixed top-0 inset-x-0 border-b-1 border-dark-400',
			scrollY > 100 && 'bg-dark-800/30 shadow-xl',
		]">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global">
			<div class="flex lg:flex-1">
				<a href="/" class="-m-1.5 p-1.5">
					<span class="sr-only">Kitsu</span>
					<nuxt-img
						sizes="md:32px"
						format="webp"
						class="h-8 w-auto"
						src="https://status.kitsunes.club/upload/logo1.png"
						alt="" />
				</a>
			</div>
			<div class="flex lg:hidden">
				<button
					type="button"
					class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
					@click="open = true">
					<span class="sr-only">Open main menu</span>
					<Icon
						name="tabler:menu"
						class="h-6 w-6"
						aria-hidden="true" />
				</button>
			</div>
			<HeadlessPopoverGroup class="hidden lg:flex lg:gap-x-12">
				<HeadlessPopover class="relative">
					<HeadlessPopoverButton
						class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-50">
						Services
						<Icon
							name="tabler:chevron-down"
							class="h-5 w-5 flex-none text-gray-500"
							aria-hidden="true" />
					</HeadlessPopoverButton>

					<transition
						enter-active-class="transition ease-out duration-200"
						enter-from-class="opacity-0 translate-y-1"
						enter-to-class="opacity-100 translate-y-0"
						leave-active-class="transition ease-in duration-150"
						leave-from-class="opacity-100 translate-y-0"
						leave-to-class="opacity-0 translate-y-1">
						<HeadlessPopoverPanel
							class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-dark-400 shadow-lg ring-1 ring-gray-50/5">
							<div class="p-4">
								<div
									v-for="item in products"
									:key="item.name"
									class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-dark-300">
									<div
										class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-dark-200 group-hover:bg-dark-100">
										<nuxt-img
											:src="item.image"
											format="webp"
											sizes="sm:24px"
											class="h-6 w-6 text-gray-600"
											aria-hidden="true" />
									</div>
									<div class="flex-auto">
										<a
											:href="item.href"
											class="block font-semibold text-gray-50">
											{{ item.name }}
											<span class="absolute inset-0" />
										</a>
										<p class="mt-1 text-gray-300">
											{{ item.description }}
										</p>
									</div>
								</div>
							</div>
						</HeadlessPopoverPanel>
					</transition>
				</HeadlessPopover>

				<a
					href="#communication"
					class="text-sm font-semibold leading-6 text-gray-50"
					@click="scrollTo"
					>Communication</a
				>
				<a
					href="#stats"
					class="text-sm font-semibold leading-6 text-gray-50"
					@click="scrollTo"
					>Stats</a
				>
				<a
					href="#microblog"
					class="text-sm font-semibold leading-6 text-gray-50"
					@click="scrollTo"
					>Microblogging</a
				>
			</HeadlessPopoverGroup>
			<div class="hidden lg:flex lg:flex-1 lg:justify-end">&nbsp;</div>
		</nav>
		<HeadlessDialog
			as="div"
			class="lg:hidden"
			:open="open"
			@close="open = false">
			<div class="fixed inset-0 z-10" />
			<HeadlessDialogPanel
				class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-dark-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-50/10">
				<div class="flex items-center justify-between">
					<a href="#" class="-m-1.5 p-1.5">
						<span class="sr-only">Kitsu</span>
						<nuxt-img
							sizes="md:32px"
							class="h-8 w-auto"
							src="https://status.kitsunes.club/upload/logo1.png"
							alt="" />
					</a>
					<button
						type="button"
						class="-m-2.5 rounded-md p-2.5 text-gray-200"
						@click="open = false">
						<span class="sr-only">Close menu</span>
						<Icon
							name="tabler:x"
							class="h-6 w-6"
							aria-hidden="true" />
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							<HeadlessDisclosure
								v-slot="{ open }"
								as="div"
								class="-mx-3">
								<HeadlessDisclosureButton
									class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-50 hover:bg-dark-200">
									Services
									<Icon
										name="tabler:chevron-down"
										:class="[
											open ? 'rotate-180' : '',
											'h-5 w-5 flex-none',
										]"
										aria-hidden="true" />
								</HeadlessDisclosureButton>
								<HeadlessDisclosurePanel class="mt-2 space-y-2">
									<HeadlessDisclosureButton
										v-for="item in products"
										:key="item.name"
										as="a"
										:href="item.href"
										class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-50 hover:bg-dark-200"
										>{{
											item.name
										}}</HeadlessDisclosureButton
									>
								</HeadlessDisclosurePanel>
							</HeadlessDisclosure>
							<a
								href="#communication"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-dark-200"
								@click="scrollTo"
								>Communication</a
							>
							<a
								href="#stats"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-dark-200"
								@click="scrollTo"
								>Stats</a
							>
							<a
								href="#microblog"
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-50 hover:bg-dark-200"
								@click="scrollTo"
								>Microblogging</a
							>
						</div>
					</div>
				</div>
			</HeadlessDialogPanel>
		</HeadlessDialog>
	</header>
</template>
