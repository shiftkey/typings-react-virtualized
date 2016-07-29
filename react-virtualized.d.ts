/// <reference path="../react/react.d.ts" />

declare namespace ReactVirtualized {
  import React = __React

  interface CellGroupRendererConfig {
    cellSizeAndPositionGetter: Function;
    indices: Array<number>;
    cellRenderer: Function;
  }

  interface CellRendererConfig {
    index: number;
    isScrolling: boolean;
  }

  interface CellConfig {
    height: number;
    width: number;
    x: number;
    y: number;
  }

  interface CellSizeAndPositionGetterConfig {
    index: number;
  }

  interface SectionRenderedConfig {
    indices: Array<number>;
  }

  interface ScrollConfig {
    clientHeight: number;
    clientWidth: number;
    scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;
    scrollWidth: number;
  }

  type CollectionAlignment = 'auto' | 'start' | 'end';

  interface CollectionProps extends React.Props<Collection> {
    className?: string;
    cellCount: number;
    cellGroupRenderer: (config: CellGroupRendererConfig) => Array<React.ReactNode>;
    cellRenderer: (config: CellRendererConfig) => React.ReactElement<any>;
    cellSizeAndPositionGetter: (config: CellSizeAndPositionGetterConfig) => CellConfig;
    height: number;
    noContentRenderer?: () => React.ReactNode;
    onSectionRendered?: (config: SectionRenderedConfig) => void;
    onScroll?: (config: ScrollConfig) => void;
    scrollLeft?: number;
    scrollToAlignment?: CollectionAlignment;
    scrollToCell?: number;
    scrollTop?: number;
    sectionSize?: number;
    style?: Object;
    width: number;
  }

  interface Collection extends React.ComponentClass<CollectionProps> {}
  interface CollectionElement extends React.ReactElement<CollectionProps> {}

}

declare module 'react-virtualized' {
  export type Collection = ReactVirtualized.Collection
}
