
import React from 'react';
import { convertToHTML } from 'draft-convert';

export const Entity = {
  LINK: 'LINK',
};

export const entityToHTML = (entity, originalText) => {
  if (entity.type === Entity.LINK) {
    return (
      <a
        href={entity.data.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {originalText}
      </a>
    );
  }
  return originalText;
};

export const options = {
  entityToHTML
};

export const setRenderOptions = (htmlOptions = options) => convertToHTML(htmlOptions);


export default (contentState, htmlOptions = options) => convertToHTML(htmlOptions)(contentState);