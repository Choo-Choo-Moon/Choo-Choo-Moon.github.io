<script lang="ts">
	export let src: string;
	export let alt: string;
	export let size: string = 'size-[3vw]';
	export let lightColor: string = 'bg-black';
	export let darkColor: string = 'bg-white';
</script>

<div
	class="{size} {lightColor} dark:{darkColor}"
	style="mask: url('{src}') no-repeat center; mask-size: contain; -webkit-mask: url('{src}') no-repeat center; -webkit-mask-size: contain;"
	role="img"
	aria-label={alt}
></div>
