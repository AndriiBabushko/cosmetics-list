export interface ICosmetic {
  id: string;
  name: string;
  description: string;
  type: {
    value: string;
    displayValue: string;
    backendValue: string;
  };
  rarity: {
    value: string;
    displayValue: string;
    backendValue: string;
  };
  series: {
    value: string;
    image: string;
    colors: string[];
    backendValue: string;
  };
  set: {
    value: string;
    text: string;
    backendValue: string;
  };
  introduction: {
    chapter: string;
    season: string;
    text: string;
    backendValue: number;
  };
  images: {
    smallIcon: string;
    icon: string;
    featured: string;
    other: Record<string, string>;
  };
  variants: {
    channel: string;
    type: string;
    options: {
      tag: string;
      name: string;
      image: string;
    }[];
  }[];
  searchTags: string[];
  gameplayTags: string[];
  metaTags: string[];
  showcaseVideo: string;
  dynamicPakId: string;
  displayAssetPath: string;
  definitionPath: string;
  path: string;
  added: Date;
  shopHistory: Date[];
}
