import { visit } from 'unist-util-visit';

export default function customRehypePlugin() {
    return (tree) => {
      visit(tree, 'element', (node, index, parent) => {
        if (node.tagName == 'h2') {
          const color = {
            type: 'element',
            tagName: 'div',
            properties: {className: ['testColor']}
          };

          const div = {
            type: 'element',
            tagName: 'div',
            properties: {className: ['headeing']},
            children: [color,node],
          };
          parent.children[index] = div;
        }
      });

      visit(tree, 'element', (node, index, parent) => {
        if (node.tagName == 'blockquote') {
          node.properties = node.properties || {};
          node.properties.className = node.properties.className || [];
          node.properties.className.push('custom-heading');
        }
      });

      // visit(tree, 'element', (node, index, parent) => {
      //   if (node.tagName == 'p') {
      //     if (node.children.tagName == 'code') {
      //       node.children.properties = node.children.properties || {};
      //       node.children.properties.className = node.children.properties.className || [];
      //       node.children.properties.className.push('custom-heading');
      //     }
      //   }
      // });

      visit(tree, 'element', (node, index, parent) => {
        if (node.tagName === 'p' && node.children) {
          node.children.forEach((child, childIndex) => {
            if (child.type === 'element' && child.tagName === 'code') {
              // 确保 properties 存在
              child.properties = child.properties || {};
              child.properties.className = child.properties.className || [];
  
              // 添加自定义类名
              child.properties.className.push('code-line');
            }
          });
        }
      });
    };
  }