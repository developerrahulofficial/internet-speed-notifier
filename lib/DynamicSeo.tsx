import { Metadata } from "next";
import { seoData } from "@/json";
import { cn } from "./utils";

const DynamicSeo = (index: number): Metadata => {
	const currentSeoData = seoData[index] || {};

	return {
		title: currentSeoData.LAYOUT_SEO_TITLE || "",
		description: currentSeoData.LAYOUT_SEO_DESCRIPTION || "",
		generator: currentSeoData.LAYOUT_CREATORS || "",
		applicationName: currentSeoData.LAYOUT_APPLICATION_NAME || "",
		referrer: "origin-when-cross-origin",
		keywords: currentSeoData.LAYOUT_KEYWORDS || "",
		authors: [{ name: "Abolade Greatness", url: "https://github.com/thegrtnx" }],
		creator: currentSeoData.LAYOUT_CREATORS || "",
		publisher: "curlback inc",
		formatDetection: {
			email: false,
			address: false,
			telephone: false,
		},
		metadataBase: new URL(cn(currentSeoData.LAYOUT_URL || "")),
		alternates: {
			canonical: currentSeoData.LAYOUT_URL || "",
		},
		openGraph: {
			title: currentSeoData.LAYOUT_SEO_TITLE || "",
			description: currentSeoData.LAYOUT_SEO_DESCRIPTION || "",
			url: currentSeoData.LAYOUT_URL || "",
			siteName: currentSeoData.LAYOUT_APPLICATION_NAME || "",
			images: [
				{
					url: "/images/YTThumbnail.jpg",
					width: 1280,
					height: 720,
					alt: currentSeoData.LAYOUT_APPLICATION_NAME || "",
				},
			],
			locale: "en_US",
			type: "website",
		},
		robots: {
			index: false,
			follow: true,
			nocache: true,
			googleBot: {
				index: true,
				follow: false,
				noimageindex: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		icons: {
			icon: "/images/favicon_io/favicon-32x32.png",
			shortcut: "/images/favicon_io/favicon-32x32.png",
			apple: "/images/favicon_io/apple-touch-icon.png",
			other: {
				rel: "/images/android-chrome-512x512",
				url: "/images/favicon_io/android-chrome-512x512.png",
			},
		},
		verification: {
			google: "",
			other: {
				me: ["hello@thegrtnx.com.ng", "speed.thegrtnx.com.ng"],
			},
		},
		twitter: {
			card: "summary",
			title: currentSeoData.LAYOUT_APPLICATION_NAME || "",
			description: currentSeoData.LAYOUT_SEO_DESCRIPTION || "",
			creator: "@thegrtnx",
			images: ["/images/YTThumbnail.jpg"],
		},
		category: "technology",
	};
};

export default DynamicSeo;
