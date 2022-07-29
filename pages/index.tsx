import type { NextPage } from "next";
import Head from "next/head";
import {
  Anchor,
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Paragraph,
  Text,
} from "@tres-ui/react";
import { ChevronDownIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { Badge } from "../components/Badge";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pretty, Accessible React UI components | Tres UI</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Box
          css={{
            background: "url(/corneredstairs.svg) no-repeat center",
            backgroundSize: "cover",
          }}
        >
          <Container
            size="3"
            css={{
              background: "url(/corneredstairs.svg) no-repeat center",
              backgroundSize: "cover",
            }}
          >
            <Flex
              direction="column"
              align="center"
              justify="between"
              css={{
                height: "100vh",
              }}
            >
              <Box css={{ width: "100%", textAlign: "right", my: "$2" }}>
                <Text size="2">
                  Built with{" "}
                  <Anchor href="https://www.radix-ui.com/" target="_blank">
                    Radix Primitives
                  </Anchor>{" "}
                  and{" "}
                  <Anchor href="https://stitches.dev/" target="_blank">
                    Stitches
                  </Anchor>
                </Text>
              </Box>
              <Flex
                direction="column"
                align="center"
                gap="3"
                css={{ textAlign: "center" }}
              >
                <Image
                  src="/tres.svg"
                  alt="tres logo"
                  css={{ my: "$4", width: "$8" }}
                />
                <Heading as="h1" size="4" css={{ letterSpacing: "1px" }}>
                  Pretty. Accessible. <br /> React UI components.
                </Heading>
                <Text colorScheme="gray" size="5" css={{ my: "$2" }}>
                  React component library built from a fork of{" "}
                  <Anchor href="https://workos.com" target="_blank">
                    WorkOS
                  </Anchor>{" "}
                  design system
                </Text>
                <Flex gap="3">
                  <Badge size="1" variant="blue">
                    wip
                  </Badge>
                  <Badge size="1" variant="gray">
                    <strong>yarn add @tres-ui/react</strong>
                  </Badge>
                </Flex>
              </Flex>
              <Box css={{ textAlign: "center", my: "$6" }}>
                <ChevronDownIcon />
              </Box>
            </Flex>
          </Container>
        </Box>
        <Container size="2">
          <Flex gap="6" css={{ my: "$9" }} direction="column">
            <Flex gap="2" direction="column">
              <Heading size="2">Why?</Heading>
              <Paragraph>
                I&apos;ve been indiehacking for an year now. Thinking about how
                your app is gonna look really eats up important time. I tried
                using open source React component libraries, but I don&apos;t
                like the look and feel of components that ship with Chakra,
                Antd, Material UI, and others.
              </Paragraph>
              <Paragraph>
                WorkOS design system is one of the best that I&apos;ve come
                across. The components are clean, simple, and easy to use.
                However, the colors and design of some components give it a
                certain &ldquo;branding&rdquo;. And of course, it isn&apos;t
                very configurable. I don&apos;t like that. I wanted a UI library
                that has no branding, no colors (grayscale), and is
                configurable. So I forked the WorkOS design system and started
                creating my own React UI library with a slightly different API
                than that of WorkOS&apos;s.
              </Paragraph>
              <Paragraph>Cool, right?</Paragraph>
            </Flex>
            <Flex gap="2" direction="column">
              <Heading size="2">What&apos;s in the name?</Heading>
              <Paragraph>
                I want the components in grayscale, mostly black and white.
                That&apos;s because dealing with colors is tricky. So I named
                the project &ldquo;Tres&rdquo;, after this exo-planet called{" "}
                <Anchor
                  href="https://en.wikipedia.org/wiki/TrES-2b"
                  target="_blank"
                >
                  <strong>TrES-2b</strong>
                </Anchor>
                . It&apos;s a fascinating planet because it reflects no more
                than 1% of light. And for that reason, looks all black most of
                the time.
              </Paragraph>
            </Flex>
            <Flex gap="2" direction="column">
              <Heading size="2">Docs?</Heading>
              <Paragraph>
                It&apos;s WIP. For the time being, you may see how to use the
                components{" "}
                <Anchor
                  href="https://github.com/radix-ui/design-system/blob/master/pages/index.tsx"
                  target="_blank"
                >
                  here
                </Anchor>
                .
              </Paragraph>
            </Flex>
          </Flex>
          <hr />
        </Container>
        <Container size="2" css={{ my: "$6" }}>
          <Text>
            Made with <HeartFilledIcon /> by{" "}
            <Anchor href="https://thebrokenfinger.com">Yatharth</Anchor>
          </Text>
        </Container>
      </main>
    </div>
  );
};

export default Home;
