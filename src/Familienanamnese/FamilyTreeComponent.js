import React, {useState} from 'react';
import {IFamilyNode, IFamilyExtNode} from 'relatives-tree';
import ReactFamilyTree from 'react-family-tree';
import FamilyNode from './FamilyNode';
import styles from './FamilyTree.module.css';

import nodes from './FamilyData';

const myID = 'kuVISwh7w';

const WIDTH = 40;
const HEIGHT = 40;


function FamilyTree() {
    const [rootId, setRootId] = useState(myID);

    return (
        <div className={styles.root}>
            <p>Hello</p>
            <ReactFamilyTree
                nodes={(nodes: IFamilyNode)}
                rootId={rootId}
                width={WIDTH}
                height={HEIGHT}
                canvasClassName={styles.tree}
                renderNode={(node: IFamilyExtNode) => (
                    <FamilyNode
                        key={node.id}
                        node={node}
                        isRoot={node.id === rootId}
                        onSubClick={setRootId}
                        style={{
                            width: WIDTH,
                            height: HEIGHT,
                            transform: `translate(${node.left * (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`,
                        }}
                    />
                )}
            />
        </div>
    );
}

export default FamilyTree;