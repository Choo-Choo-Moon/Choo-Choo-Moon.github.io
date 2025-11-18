<script lang="ts">
	const { src, alt, dropShadowColor = null, url = null } = $props();

	const onLoadIcon = (imageElement: HTMLImageElement) => {
		let shadowColor;
		if (dropShadowColor) {
			shadowColor = `rgb(${dropShadowColor.r},${dropShadowColor.g},${dropShadowColor.b})`;
		} else {
			const avgColor = getAverageColor(imageElement);
			shadowColor = `rgb(${avgColor.r},${avgColor.g},${avgColor.b})`;
		}
		imageElement.style.filter = `drop-shadow(0mm 0mm 2mm ${shadowColor})`;
	};

	const getAverageColor = (imageElement: HTMLImageElement) => {
		const canvas = document.createElement('canvas');
		const context = canvas.getContext('2d');

		if (!context) {
			return { r: 0, g: 0, b: 0 };
		}

		canvas.width = imageElement.naturalWidth || imageElement.offsetWidth || imageElement.width;
		canvas.height = imageElement.naturalHeight || imageElement.offsetHeight || imageElement.height;

		context.drawImage(imageElement, 0, 0, canvas.width, canvas.height);

		try {
			const data = context.getImageData(0, 0, canvas.width, canvas.height);
			const pixels = data.data;

			let r = 0,
				g = 0,
				b = 0;
			let opaquePixelCount = 0;

			for (let i = 0; i < pixels.length; i += 4) {
				const alpha = pixels[i + 3];

				if (alpha > 0) {
					r += pixels[i];
					g += pixels[i + 1];
					b += pixels[i + 2];
					opaquePixelCount++;
				}
			}

			if (opaquePixelCount === 0) {
				return { r: 0, g: 0, b: 0 };
			}

			r = Math.floor(r / opaquePixelCount);
			g = Math.floor(g / opaquePixelCount);
			b = Math.floor(b / opaquePixelCount);

			return { r, g, b };
		} catch (e) {
			return { r: 0, g: 0, b: 0 };
		}
	};

	const onclick = () => {};
</script>

{#if url}
	<a href={url}>
		<img
			class="size-[clamp(3rem,2vw,3vw)]"
			{src}
			{alt}
			onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
		/>
	</a>
{:else}
	<img
		class="size-[clamp(3rem,2vw,3vw)]"
		{src}
		{alt}
		onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
	/>
{/if}
