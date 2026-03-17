'use client'
import * as z from 'zod'
import React, { useTransition } from 'react'
import { CardWrapper } from './card-wrapper'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormMessage, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { RegisterSchema } from '@/schemas'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { register } from '@/actions/register'
import { toast } from 'sonner'

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: '',
      name: '',
    }
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      register(values)
        .then((data) => {
          if (data.error) toast.error(data.error);
          if (data.success) toast.success(data.success);
        })
    });
  };

  return (
    <CardWrapper
      headerLabel='Create an account'
      backButtonHref='/auth/login '
      backButtonLabel='Already have an account ?'
      showSocial
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-light text-gray-700">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='example@gmail.com'
                      type="email"
                      className="rounded-xl border-midnight/10 h-12 focus-visible:ring-midnight/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='name'
              render={({ field }) => (
                <FormItem>
                  <span className="font-light text-gray-700 text-sm">Name</span>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='John Doe'
                      type="text"
                      className="rounded-xl border-midnight/10 h-12 focus-visible:ring-midnight/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-light text-gray-700">Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder='******'
                      type="password"
                      className="rounded-xl border-midnight/10 h-12 focus-visible:ring-midnight/20"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={isPending}
            type="submit"
            className="w-full bg-midnight hover:bg-midnight/90 text-white rounded-full py-6 text-base font-medium transition-all duration-300"
          >
            Create an account
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
