<script setup lang="ts">
import "./styles/index.css";
import "@unocss/reset/tailwind.css";

const me = definePerson({
	name: `Kio`,
	image: "https://hornypedia.kitsunes.gay/thumbnail-a8e591ac-7f55-448d-84a8-2e5290672499.webp",
	sameAs: [
		"https://matrix.to/#/@kio:kitsunes.club",
		"https://kitsunes.club/@kio",
		"https://kitsunes.gay/@kio",
		"https://kitsunes.cafe/u/kio",
	],
	description:
		"Kio is a developer and sysadmin who loves to make cool things!",
});

const myOrg = defineOrganization({
	name: "Kitsu",
	logo: "https://status.kitsunes.club/upload/logo1.png",
});

useSchemaOrg([me, myOrg]);

useServerSeoMeta({
	author: me.name,
	ogLocale: "en_CA",
	description:
		"Kitsu is a fun and friendly community with a variety of services!",
});
</script>

<template>
	<OgImageScreenshot />
	<OgImageStatic />
	<NuxtLayout>
		<NuxtLoadingIndicator />
		<NuxtPage />
	</NuxtLayout>
</template>
