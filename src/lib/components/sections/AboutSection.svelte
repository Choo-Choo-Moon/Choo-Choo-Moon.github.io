<script lang="ts">
	const onLoadIcon = (imageElement: HTMLImageElement) => {
		const avgColor = getAverageColor(imageElement);
		const shadowColor = `rgb(${avgColor.r},${avgColor.g},${avgColor.b})`;
		imageElement.style.filter = `drop-shadow(1mm 1mm 2mm ${shadowColor})`;
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
</script>

<section id="about" class="relative min-h-screen w-screen">
	<div class="flex w-full flex-col items-center md:flex-row-reverse md:items-start">
		<!-- 사진 (모바일: 첫번째, PC: 두번째) -->
		<div class="relative h-[600px] w-full overflow-hidden md:h-[1200px] md:w-1/2">
			<img
				class="h-full w-full scale-125 object-cover drop-shadow-[10px_8px_6px] drop-shadow-gray-800 md:scale-100"
				src="/images/main.png"
				alt="logo"
			/>
			<div
				class="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white via-white/50 to-transparent dark:from-black dark:via-black/50"
			></div>
		</div>

		<!-- 텍스트 (모바일: 두번째, PC: 첫번째) -->
		<div class="w-full p-8 md:w-1/2 md:p-16">
			<h1 class="mb-8 text-6xl font-bold md:text-8xl">About</h1>
			<div class="space-y-6">
				<div>
					<h4 class="mb-1 text-xl font-normal opacity-70">Name</h4>
					<h2 class="mb-3 text-3xl font-semibold">Moon Chang Kyu</h2>
				</div>
				<div>
					<h4 class="mb-1 text-xl font-normal opacity-70">A.k.a</h4>
					<h3 class="mb-3 text-3xl font-semibold">Charlie Moon</h3>
				</div>
				<div>
					<h4 class="mb-1 text-xl font-normal opacity-70">Mobile</h4>
					<div class="flex gap-10">
						<img
							class="size-[3vw]"
							src="/images/Kotlin_Logo.svg"
							alt="Kotlin_Logo"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/Android_Logo.svg"
							alt="Android_Logo"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/Jetpack_Logo.png"
							alt="Jetpack_Logo"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/JetpackCompose_Logo.svg"
							alt="JetpackCompose_Logo"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
					</div>
				</div>
				<div>
					<h4 class="mb-1 text-xl font-normal opacity-70">Frontend</h4>
					<div class="flex gap-10">
						<img
							class="size-[3vw]"
							src="/images/JavaScript.svg"
							alt="JavaScriptLogo"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/Vue_Logo.svg"
							alt="VueLogo"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/Svelte_Logo.svg"
							alt="Svelte_Logo"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
					</div>
				</div>
				<div>
					<h4 class="mb-5 text-xl font-normal opacity-70">Backend</h4>
					<div class="flex gap-10">
						<img
							class="size-[3vw]"
							src="/images/Java_Logo.svg"
							alt="Java_Logo"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/Spring_Logo.svg"
							alt="Spring_Logo"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/MySQL_Logo.svg"
							alt="MySQL_Logo"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
					</div>
				</div>
				<div>
					<h4 class="mb-5 text-xl font-normal opacity-70">Version Control Tool</h4>
					<div class="flex gap-10">
						<img
							class="size-[3vw]"
							src="/images/Git.svg"
							alt="Git"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw] dark:hidden"
							src="/images/Github.svg"
							alt="GitHub"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="hidden size-[3vw] dark:block"
							src="/images/Github_White.svg"
							alt="GitHub"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/GitLab.svg"
							alt="GitLab"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
					</div>
				</div>
				<div>
					<h4 class="mb-5 text-xl font-normal opacity-70">Collaboration Tool</h4>
					<div class="flex gap-10">
						<img
							class="size-[3vw]"
							src="/images/Jira.svg"
							alt="Jira"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/Figma.svg"
							alt="Figma"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/Slack.svg"
							alt="MySQL_Logo"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
					</div>
				</div>

				<div>
					<h4 class="mb-5 text-xl font-normal opacity-70">Interested</h4>
					<div class="flex gap-10">
						<img
							class="size-[3vw]"
							src="/images/ComposeMultiPlatform.svg"
							alt="MySQL_Logo"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/Rust.svg"
							alt="Rust"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/Tauri.svg"
							alt="Tauri"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/Bun.svg"
							alt="Bun"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/Docker.svg"
							alt="Docker"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/Zig.svg"
							alt="Zig"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
						<img
							class="size-[3vw]"
							src="/images/Servo_Logo.svg"
							alt="Servo_Logo"
							onload={(e) => onLoadIcon(e.currentTarget as HTMLImageElement)}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
