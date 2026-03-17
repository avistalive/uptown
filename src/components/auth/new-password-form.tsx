'use client'
import * as z from 'zod'
import React, { useTransition } from 'react'
import { CardWrapper } from './card-wrapper'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormMessage, FormControl, FormField, FormItem, FormLabel } from '../ui/form'
import { NewPasswordSchema } from '@/schemas'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { newPassword } from '@/actions/new-password'
import { useSearchParams } from 'next/navigation'
import { toast } from 'sonner'

export const NewPasswordForm = () => {
  const searchParams = useSearchParams()
  const token = searchParams.get("token")

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    }
  })

  const onSubmit = (values: z.infer<typeof NewPasswordSchema>) => {
    startTransition(() => {
      newPassword(values, token)
        .then((data) => {
          if (data?.error) toast.error(data.error);
          if (data?.success) toast.success(data.success);
        })
    });
  };

  return (
    <CardWrapper
      headerLabel='Enter a new password'
      backButtonHref='/auth/login'
      backButtonLabel='Back to login'
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'
        >
          <div className='space-y-4'>
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
            type='submit'
            className="w-full bg-midnight hover:bg-midnight/90 text-white rounded-full py-6 text-base font-medium transition-all duration-300"
          >
            Reset Password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
