import '@root/global-fonts.css';
import '@root/global.css';

import DefaultLayout from '@components/page/DefaultLayout';
import DefaultActionBar from '@components/page/DefaultActionBar';
import Grid from '@components/Grid';
import CardDouble from '@components/CardDouble';
import Divider from '@components/Divider';
import CodeBlock from '@components/CodeBlock';
import ActionListItem from '@components/ActionListItem';

export default function BlogPostPage() {
  return (
    <DefaultLayout previewPixelSrc="/hiroshi.jpg">
      <DefaultActionBar />
      <br />
      <Grid>
        <ActionListItem icon={`⭠`} href="/">
          Back to Home
        </ActionListItem>
        <br />
        <CardDouble title="A Dive into Matrix Multiplication">
          <p>
            As a computer vision engineer, matrix multiplication is a fundamental operation I use every day. It's the bedrock of linear algebra and forms the basis for transformations, convolutions in neural networks, and much more.
          </p>
          <br />
          <p>
            Let's look at a simple implementation using Python and NumPy.
          </p>
          <br />
          <Divider />
          <br />
          <CodeBlock>
{`import numpy as np

# Define two matrices
A = np.array([[1, 2, 3], 
              [4, 5, 6]])

B = np.array([[7, 8], 
              [9, 10], 
              [11, 12]])

# Perform matrix multiplication
C = np.dot(A, B)

# C is a 2x2 matrix
print(C)
# Output:
# [[ 58  64]
#  [139 154]]`}
          </CodeBlock>
          <br />
          <p>
            The key is that the number of columns in the first matrix (A) must match the number of rows in the second matrix (B). The resulting matrix (C) will have the number of rows of A and the number of columns of B.
          </p>
        </CardDouble>
      </Grid>
    </DefaultLayout>
  );
}