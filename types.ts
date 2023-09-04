export type Block = {
  attritubes: {
    align: string;
    content: string;
    contentPosition: string;
    dimRatio: number;
    height: number;
    id: number;
    layout: {
      type: string;
    };
    minHeight: number;
    minHeightUnit: string;
    url: string;
    width: number;
  };
  dynamicContent: string;
  innerBlocks: Block[];
  name: string;
  originalContent: string;
};
