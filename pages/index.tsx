import * as React from 'react';
import { Card, StyledBody, StyledAction } from 'baseui/card';
import { Button } from 'baseui/button';
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid justify-items-center content-center w-screen h-screen">
      <Card
        overrides={{ Root: { style: { width: '328px' } } }}
        headerImage={
          'https://source.unsplash.com/user/erondu/700x400'
        }
        title="Index Page">
        <StyledBody>
          Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla
          ornare faucibus ex, non facilisis nisl.
        </StyledBody>
        <StyledAction>
          <Link href="/page_one">
            <Button overrides={{ BaseButton: { style: { width: '100%' } } }}>
              Go to Page One
            </Button>
          </Link>
        </StyledAction>
      </Card>
    </main>
  )
}