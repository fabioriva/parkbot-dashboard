"use client";

import { useRouter } from "next-intl/client";
import { useTranslations } from "next-intl";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Flex, Grid, Button, Card, Icon, Title, Text } from "@tremor/react";
// import LocaleSwitcher from "@/components/LocaleSwitcher";
import pages from "@/constants/pages";

export default function Home({ aps, user }) {
  // console.log(payload);
  const router = useRouter();
  const t = useTranslations("Home");

  return (
    <Grid numColsSm={2} numColsLg={4} className="gap-6 items-start">
      {pages
        // .filter((item) => item.role !== "home")
        .map((item) => (
          <Card
            // className={`hover:bg-${item.color}-100`}
            // onClick={() =>
            //   user.roles.some((role) => role === item.role) &&
            //   router.push(`/${aps}/${item.role}`)
            // }
            key={item.role}
          >
            <Icon
              variant="light"
              icon={item.icon}
              size="lg"
              color={item.color}
            />
            <Title className="mt-6">{t(`${item.role}-title`)}</Title>
            <Text className="py-3">{t(`${item.role}-info`)}</Text>
            <Flex className="pt-6 border-t">
              <Button
                size="xs"
                variant="light"
                icon={ArrowRightIcon}
                iconPosition="right"
                disabled={!user.roles.some((role) => role === item.role)}
                onClick={() => router.push(`/${aps}/${item.role}`)}
              >
                View more
              </Button>
            </Flex>
          </Card>
        ))}
    </Grid>
  );
}
